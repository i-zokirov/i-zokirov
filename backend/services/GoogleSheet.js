import { google } from "googleapis";
import fs from "fs";

const credentials = JSON.parse(fs.readFileSync("./keys/googlesheet-key.json"));
class GoogleSheet {
    constructor(spreadSheetId) {
        const scope = ["https://www.googleapis.com/auth/spreadsheets"];
        const { client_email, private_key } = credentials;
        const jwtClient = new google.auth.JWT(
            client_email,
            null,
            private_key,
            scope
        );
        const { spreadsheets } = google.sheets({
            version: "v4",
            auth: jwtClient,
        });

        this.spreadSheetId = spreadSheetId;
        this.spreadsheets = spreadsheets;
    }
    // range can be both in A1 notation or R1C1 notation
    // range is required to call this method
    async getRows(range, spreadsheetId = this.spreadSheetId) {
        try {
            const {
                data: { values },
            } = await this.spreadsheets.values.get({
                spreadsheetId,
                range,
            });
            return values;
        } catch (error) {
            throw error;
        }
    }
    async getSheets(spreadsheetId = this.spreadSheetId) {
        try {
            const {
                data: { sheets },
            } = await this.spreadsheets.get({ spreadsheetId });
            return sheets;
        } catch (error) {
            throw error;
        }
    }

    async appendSheet(title, spreadsheetId = this.spreadSheetId) {
        try {
            const requests = [
                {
                    addSheet: {
                        properties: {
                            title,
                        },
                    },
                },
            ];
            const batchUpdateRequest = { requests };
            const {
                data: { replies },
            } = await this.spreadsheets.batchUpdate({
                spreadsheetId,
                resource: batchUpdateRequest,
            });
            return replies;
        } catch (error) {
            throw error;
        }
    }
    // provide rows, and range respectively.
    async appendRow(values, range, valueInputOption = "USER_ENTERED") {
        try {
            const { updates } = (
                await this.spreadsheets.values.append({
                    spreadsheetId: this.spreadSheetId,
                    range,
                    valueInputOption,
                    resource: { values },
                })
            ).data;
            return updates;
        } catch (error) {
            throw error;
        }
    }

    // returned value contains object of spreadsheetId and clearedRange values
    async clear(range) {
        try {
            const { data } = await this.spreadsheets.values.clear({
                spreadsheetId: this.spreadSheetId,
                range,
            });
            return data;
        } catch (err) {
            throw err;
        }
    }

    async update(values, range, valueInputOption = "USER_ENTERED") {
        try {
            const { data } = await this.spreadsheets.values.update({
                spreadsheetId: this.spreadSheetId,
                range,
                valueInputOption,
                resource: { values },
            });
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getSheetDataAsObject(range, spreadsheetId = this.spreadSheetId) {
        try {
            const rows = await this.getRows(range, spreadsheetId);
            return this.convertRowsToObject(rows);
        } catch (error) {
            throw error;
        }
    }

    convertRowsToObject(rows) {
        const result = [];
        for (let i = 1; i < rows.length; i++) {
            let object = {};

            for (let j = 0; j < rows[i].length; j++) {
                object[rows[0][j]] = rows[i][j];
            }
            result.push(object);
        }
        return result;
    }

    convertObjectToRows(object) {
        const values = [];
        for (let key in object) {
            values.push(object[key]);
        }
        return [values];
    }
}

export default GoogleSheet;
