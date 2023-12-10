import { Command } from "commander";

const program = new Command();

// Opcion de entorno por variable ingresada en linea de comando
program
  .option("-e, --env <env>", "Environment", "dev");
program.parse(process.argv);

export const serverOptions = program.opts();