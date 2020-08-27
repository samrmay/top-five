import loadExpress from './express'
import loadMongoose from './mongoose'

export default async (app) => {
    console.log('Loading express...')
    loadExpress(app);
    console.log('Loaded express.')
  
    console.log('Loading mongoose...')
    await loadMongoose(app);
    console.log('Loaded mongoose.')
  }