# talks

Slides & code for my talks, using Slidev.

## Adding a New Slide

To add a new slide, follow these steps:

1. Navigate to the `slides` directory and run the following command:

```sh
pnpm create slidev@latest
```

2. When prompted with `Install and start it now?`, answer `yes`.

   This will automatically install dependencies and start the new Slidev project.

5. If you answer `yes` to the above question, you might see a warning:

```sh
will be removed and reinstalled from scratch. Proceed?
```

Answer `yes` to this question as well.

4. If you answer `no` to `Install and start it now?`, you will need to install the dependencies manually.

   Move to the root directory and run:

```sh
pnpm i
```

## Updating `package.json` Scripts

To customize the build and export paths for the new slide, update the `package.json` file in the newly created slide directory.

Replace `xxx` with the project name you specified when running `pnpm create slidev@latest`.

**Example Update:**

**Before:**

```json
"scripts": {
  "build": "slidev build",
  "dev": "slidev --open",
  "export": "slidev export"
}
```

**After:**

```json
"scripts": {
  "build": "slidev build --base /xxx/ --out ../../dist/xxx",
  "dev": "slidev --open",
  "export": "slidev export --output ../output/xxx.pdf",
  "export:pptx": "slidev export --output ../output/xxx --format pptx"
}
```

### Notes

- `xxx` in scripts: Replace this placeholder with the project name you provided during the setup process.
- Output Directory: Exported files will be saved in the `output` directory by default, and built assets will go to `dist/xxx`.

## More Details

For a more detailed explanation of how this repository is structured and set up, please refer to the Zenn Scrap below:

https://zenn.dev/namidapoo/scraps/1e2348c1d847bb
