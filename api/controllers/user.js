import User from '../models/User'
import { getParams, queryMaker } from '../utils/swagger'

export async function getAll (req, res, next) {
  const users = await User.findAll({ ...queryMaker(req) })
  res.json(users)
}

export async function getOne (req, res, next) {
  const { id } = getParams(req, ['id'])
  const user = await User.findOne({ where: { id } })
  if (!user) return res.sendStatus(404).send({ message: 'not found' })
  return res.json(user)
}

export async function update (req, res, next) {
  const { id, data } = getParams(req, ['id', 'data'])
  const user = await User.findOne({ where: { id } })
  await user.update({ ...data })
  return res.json(user)
}

export async function create (req, res, next) {
  const { data } = getParams(req, ['data'])
  const user = await User.create(data)
  return res.json(user)
}

export async function remove (req, res, next) {
  const { id } = getParams(req, ['id'])
  const user = await User.findOne({ where: { id } })
  await user.destroy()
  return res.json({ success: 1, description: 'supprimer' })
}
