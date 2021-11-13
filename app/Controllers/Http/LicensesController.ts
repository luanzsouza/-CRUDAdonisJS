import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import License from "App/Models/License"
 
export default class LicensesController {
    //public async getlicenses(ctx: HttpContextContract) {
    //return [
     // {
        //id: 1,
       // title: 'getlicense',
     // },
      
   // ]
 // }
    public async postlicenses({request}: HttpContextContract) {
        const {name,identifier}= request.only(["name","identifier"])
  
       const license = await License.create({name,identifier} )
  
      return license;
  }




/*
  public async updatelicenses(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'updatelicenses',
      },
     ]
  }

  public async statuslicenses(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'updatelicenses',
      },
     ]
  }
    
*/
};



