import {neon} from '@neondatabase/serverless'
import {config} from 'dotenv'

config()

const Neon_URI = process.env.NEON_DB_URI

export const sql = neon(Neon_URI)