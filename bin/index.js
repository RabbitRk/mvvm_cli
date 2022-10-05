#! /usr/bin/env node

import figlet from "figlet";
import yargs from "yargs/yargs";
import inquirer from "inquirer";
import touch from "touch";
import chalk from "chalk";
import fs from 'fs'; 
 

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
        message: "Enter module name?"
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