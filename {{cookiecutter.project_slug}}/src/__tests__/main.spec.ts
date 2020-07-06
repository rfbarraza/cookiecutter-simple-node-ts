//
// main.spec.ts
// {{ cookiecutter.project_name }}
//
// Copytight (c) {% now 'local', '%Y' %} {{ cookiecutter.full_name }}
//

import { Main } from "../main";


describe("main", () => {
  let main: Main;

  beforeEach(() => {
    main = new Main();
  });

  describe("tests", () => {
    test("test", () => {
      expect(main.run()).toBe(0);
    });
  });
});
