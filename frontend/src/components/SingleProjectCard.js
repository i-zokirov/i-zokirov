import React from 'react';
import { Heading, Text, IconButton, Tooltip } from '@chakra-ui/react';
import Feature from './Feature';
import FAIcons from './FAIcons';

const SingleProjectCard = ({ project }) => {
  const { sourceLink, repoLink, demoLink, title, text, stack } = project;
  return (
    <Feature
      justifyContent="center"
      align="left"
      p={4}
      radius={'10px'}
      width={300}
      height={'auto'}
      style={{ margin: '15px' }}
      className="project-card"
    >
      <div className="project-card-header">
        <Tooltip label="View source code" placement="auto-start">
          <IconButton
            as={'a'}
            href={sourceLink}
            target="_blank"
            rel="noreferrer"
            style={{ cursor: 'pointer' }}
            icon={<FAIcons className="fa-solid fa-folder-open" />}
          />
        </Tooltip>

        <span className="project-card-header-right">
          <Tooltip label="View project repository" placement="auto-start">
            <IconButton
              as={'a'}
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: '5px', cursor: 'pointer' }}
              icon={<FAIcons className="fa-brands fa-github" />}
            />
          </Tooltip>
          <Tooltip label="View demo" placement="auto-start">
            <IconButton
              as={'a'}
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              style={{ cursor: 'pointer' }}
              icon={
                <FAIcons className="fa-solid fa-arrow-up-right-from-square" />
              }
            />
          </Tooltip>
        </span>
      </div>
      <br />
      <div className="project-card-body">
        <Heading as="h5" size="sm">
          <Text
            as={'span'}
            style={{ fontFamily: 'monospace' }}
            color={'green.400'}
          >
            {title}
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={'sm'}>
          {text}
        </Text>
      </div>

      <div className="project-card-footer">
        <Text color={'gray.500'} fontSize={'sm'}>
          Tech stack:
        </Text>
        <Text color={'gray.500'} fontSize={'sm'}>
          {stack.map((item, index) => (
            <span key={index}>{item} </span>
          ))}
        </Text>
      </div>
    </Feature>
  );
};

export default SingleProjectCard;
