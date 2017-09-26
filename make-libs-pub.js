"use strict";
/* globals __dirname, require, console */

const fs = require('fs');
const {copySync} = require('fs-extra');

let vueMatPath = `${__dirname}/node_modules/vue-material/dist`;
let mapFileExists = true;
let vMatStyle = 'vue-material.css';
let vMatMap = `${vMatStyle}.map`;
let paths = {
    dist: `${__dirname}/dist`,
    distCss: `${__dirname}/dist/css`,
    vMatStyles: `${vueMatPath}/${vMatStyle}`,
    vMatMap: `${vueMatPath}/${vMatMap}`,
};

Promise.resolve()
    .then(verifyDirectoriesExist)
    .then(verifyLibFilesExist)
    .then(copyLibFilesToDist)
    .then(() => console.log('#### Files successfully moved ####'))
    .catch(thrown => console.log('!!!! There was a problem moving the files!!!!\n', thrown))
;

function verifyDirectoriesExist() {
    if (!fs.existsSync(paths.dist)) {
        // make dist directory
        fs.mkdirSync(paths.dist);
    }
    if (!fs.existsSync(paths.distCss)) {
        // make dist/css directory
        fs.mkdirSync(paths.distCss);
    }
}

function verifyLibFilesExist() {
    if (!fs.existsSync(paths.vMatStyles)) {
        throw new Error('Vue Material CSS does not appear to exist');
    }
    if (!fs.existsSync(paths.vMatMap)) {
        mapFileExists = false;
        console.log('--------------------\nWARNING: Vue Material CSS Map does not appear to exist. Creating dummy');
    }
}

function copyLibFilesToDist() {
    copySync(paths.vMatStyles, `${paths.distCss}/${vMatStyle}`);

    if (mapFileExists)
        copySync(paths.vMatMap, `${paths.distCss}/${vMatMap}`);
}
