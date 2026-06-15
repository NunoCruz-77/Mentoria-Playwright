export default defineConfig({
testDir: './tests',
fullyParallel: true, // testes em paralelo
retries: process.env.CI ? 2 : 0, // repete só no CI
reporter: 'html', // relatório HTML
use: {
baseURL: process.env.BASE_URL, // URL base da app
trace: 'on-first-retry', // trace ao falhar
screenshot: 'only-on-failure', // screenshot ao falhar
},
projects: [ /* Chromium, Firefox, WebKit */ ],
});
