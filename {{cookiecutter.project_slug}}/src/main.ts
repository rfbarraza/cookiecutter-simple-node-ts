//
// main.ts
// {{ cookiecutter.project_name }}
//
// Copytight (c) {% now 'local', '%Y' %} {{ cookiecutter.full_name }}
//

/**
 * This is the main entry point the project.
 *
 * @pakageDocumentation
 */


/**
 * Simple class.
 */
export class Main {

  constructor(private readonly args: string[] = []) {}

  public run(): number {
    // tslint:disable-next-line:no-console
    console.log(`Hello World! ${this.args.length > 0 ? 'Args: ' + this.args : ''}`);
    return 0;
  }
}

/**
 * Main entry point
 *
 * @param args
 * @return result code
 */
function main (args: string[] = []): number {
  const inst = new Main(args);
  return inst.run();
}

main(process.argv);
