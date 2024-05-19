import axios from 'axios'
import { jsonRequestHeaders } from './request-headers.ts'
import { PaginationInfo } from '../types/Pagination-info.ts'
import { Character } from '../types/Character.ts'

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character/',
  headers: jsonRequestHeaders,
  withCredentials: false,
})

export const getAll = async () => {
  const { data } = await instance.get<{ info: PaginationInfo, results: Character[] }>('')
  return data
}