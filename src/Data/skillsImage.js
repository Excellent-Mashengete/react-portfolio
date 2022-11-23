import html from '../assets/skills/html.svg';
import docker from '../assets/skills/docker.svg';
import css from '../assets/skills/css.svg';
import express from '../assets/skills/express-js-icon.svg';
import angular from '../assets/skills/angular.svg';
import javascript from '../assets/skills/javascript.svg';
import postman from '../assets/skills/postman-icon.svg';
import nodeJS from '../assets/skills/nodeJS.svg';
import react from '../assets/skills/react.svg';
import typescript from '../assets/skills/typescript.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import mongoDB from '../assets/skills/mongoDB.svg';
import mysql from '../assets/skills/mysql.svg';
import postgresql from '../assets/skills/postgresql.svg';
import tailwind from '../assets/skills/tailwind.svg';
import php from '../assets/skills/php.svg';
import python from '../assets/skills/python.svg';
import aws from '../assets/skills/aws.svg';
import django from '../assets/skills/django.svg';
import git from '../assets/skills/git.svg';
import graphql from '../assets/skills/graphql.svg';
import figma from '../assets/skills/figma.svg';
import microsoftoffice from '../assets/skills/microsoftoffice.svg';
import nestjs from '../assets/skills/nest-js-icon.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'postman':
            return postman;
        case 'node js':
            return nodeJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'nestjs':
            return nestjs;
        case 'postgresql':
            return postgresql;
        case 'express':
            return express;
        case 'tailwind':
            return tailwind;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;        
        default:
            break;
    }
}
