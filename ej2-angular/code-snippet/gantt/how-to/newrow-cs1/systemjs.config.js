System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.2.43/",
        "angular:": "https://unpkg.com/@angular/"
    },
    map: {
        app: 'app',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
		"@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js", 
		"@syncfusion/ej2-richtexteditor": "syncfusion:ej2-richtexteditor/dist/ej2-richtexteditor.umd.min.js",
        "@syncfusion/ej2-treegrid": "syncfusion:ej2-treegrid/dist/ej2-treegrid.umd.min.js",
        "@syncfusion/ej2-gantt": "syncfusion:ej2-gantt/dist/ej2-gantt.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",        
        "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",        
        "@syncfusion/ej2-angular-gantt": "syncfusion:ej2-angular-gantt/dist/ej2-angular-gantt.umd.min.js",       

        '@angular/core': 'angular:core@5.2.0/bundles/core.umd.js',
        '@angular/common': 'angular:common@5.2.0/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler@5.2.0/bundles/compiler.umd.js',
        '@angular/http': 'angular:http@5.2.0/bundles/http.umd.js',
        '@angular/forms': 'angular:forms@5.2.0/bundles/forms.umd.js',
        '@angular/router': 'angular:router@5.2.0/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser@5.2.0/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic@5.2.0/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material@5.2.0/bundles/material.umd.js',
		'rxjs': 'https://unpkg.com/rxjs@5.5.10' 
    },
    packages: {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'index' },
    }
});

System.import('app');