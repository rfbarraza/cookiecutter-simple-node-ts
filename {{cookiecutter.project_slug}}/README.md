# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

## Installation

## Usage

## Contributing

## License
{% if cookiecutter.license == 'GNU AGPLv3' -%}
[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0.txt)
{% elif cookiecutter.license == 'GNU GPLv3' -%}
[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
{% elif cookiecutter.license == 'GNU LGPLv3' -%}
[GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0.txt)
{% elif cookiecutter.license == 'Apache License 2.0' -%}
[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)
{% elif cookiecutter.license == 'MIT License' -%}
[MIT License](https://opensource.org/licenses/MIT)
{% else -%}
This software is not licensed for non-private distribution.
{% endif -%}
