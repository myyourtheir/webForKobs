import axios from 'axios'
import { URI } from '../config'

export const instance = axios.create({
	baseURL: URI,
})