#! /usr/bin/env node

import figlet from "figlet";
import yargs from "yargs/yargs";
import inquirer from "inquirer";
import touch from "touch";
import chalk from "chalk";
import fs from 'fs';
import parseArgs from 'minimist';

// var figlet  =require("figlet");
// const { yargs}  =require("yargs/yargs");
// // const { inquirer}  =require("inquirer");
// const { touch}  =require("touch");
// // const  chalk   = require("chalk");
// const { fs}  =require('fs');
// const   parseArgs   =require('minimist'); 
// const { program } = require('commander');


// program
//   .option('--first')
//   .option('-s, --separator <char>');

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
// Displaying
//     figlet('Kookie', function (err, data) {
//         console.log(data); 
//     });
    
// const initial = async () => {

    
// program
//   .name('string-util')
//   .description('CLI to some JavaScript string utilities')
//   .version('0.8.0');

// program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();

// }

// initial();
// var argv = parseArgs(process.argv.slice(2)); 
 
// init(argv)

// function init(argv_) { 
//     if (argv_['a'] != undefined) {
//         create_all(argv_['a'])
//     }
// }

function create_all(moduleName) {

    try {
 
        // Root path of 
        var module = `./${moduleName}`;

        if (!fs.existsSync(module)) {
            fs.mkdirSync(module);
        }

        var view_dir = `./${module}/view`;
        var view_model_dir = `./${module}/view_model`;
        var service_dir = `./${module}/service`;
        var model_dir = `./${module}/model`;

        if (!fs.existsSync(view_dir)) {
            fs.mkdirSync(view_dir);
            touch(`${module}/view/${moduleName}_view.dart`)
            touch(`${module}/view/${moduleName}_create_view.dart`)
            touch(`${module}/view/${moduleName}_edit_view.dart`)
            touch(`${module}/view/${moduleName}_detail_view.dart`)
        }
        if (!fs.existsSync(view_model_dir)) {
            fs.mkdirSync(view_model_dir);
            touch(`${module}/view_model/${moduleName}_view_model.dart`)
        }
        if (!fs.existsSync(service_dir)) {
            fs.mkdirSync(service_dir);
            touch(`${module}/service/${moduleName}_service.dart`)
        }
        if (!fs.existsSync(model_dir)) {
            fs.mkdirSync(model_dir);
            touch(`${module}/model/${moduleName}_model.dart`)
        }
        
    
        process.exit(0)
    } catch (error) { 
        process.exit(1, error)
    }

}


/// Using inquirer

// Declare a variable to store the user's name
let moduleName;

const greet = async () => {

    // Displaying
    // figlet('Kookie', function (err, data) {
    //     console.log(data); 
    // });


    // Wait for 2secs
    // await new Promise(resolve => setTimeout(resolve, 2000));

    const { name } = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter module name:"
    });


    // Set the user's name
    moduleName = name;


    var module = `./${moduleName}`;

    if (!fs.existsSync(module)) {
        fs.mkdirSync(module);
    }

    var view_dir = `./${module}/view`;
    var view_model_dir = `./${module}/view_model`;
    var service_dir = `./${module}/service`;
    var model_dir = `./${module}/model`;

    if (!fs.existsSync(view_dir)) {
        fs.mkdirSync(view_dir);
        touch(`${module}/view/${moduleName}_view.dart`)
    }
    if (!fs.existsSync(view_model_dir)) {
        fs.mkdirSync(view_model_dir);
        touch(`${module}/view_model/${moduleName}_view_model.dart`)
    }
    if (!fs.existsSync(service_dir)) {
        fs.mkdirSync(service_dir);
        touch(`${module}/service/${moduleName}_service.dart`)
    }
    if (!fs.existsSync(model_dir)) {
        fs.mkdirSync(model_dir);
        touch(`${module}/model/${moduleName}_model.dart`)
    }

}

// Call the askName function
greet();