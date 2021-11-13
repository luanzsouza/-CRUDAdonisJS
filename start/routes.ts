/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.get('/', async () => {
  return { hello: 'world' }
})
//licenses
Route.get("/api/licenses/read","LicensesController.getlicenses");
Route.post("/api/licenses/post","LicensesController.postlicenses");
//Route.patch("/api/licenses/update","LicensesController.updatelicenses");
//Route.patch("/api/licenses/status","LicensesController.statuslicenses");
//files
Route.get("/api/files/read","FilesController.getfiles");
//Route.post("/api/files/post","FilesController.postfiles");
//Route.patch("/api/files/update","FilesController.updatefiles");
//Route.patch("/api/files/status","FilesController.statusfiles");

