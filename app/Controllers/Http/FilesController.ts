import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FilesController {
    public async getfiles(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'getfiles',
      },
      
    ]
  }
    /*public async postfiles(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'postfiles',
      },
     ]
  }

  public async updatefiles(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'updatefiles',
      },
     ]
  }

  public async statusfiles(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'statusfiles',
      },
     ]
  }
    

*/}

