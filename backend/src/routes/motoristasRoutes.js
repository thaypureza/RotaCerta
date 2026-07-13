import express from 'express'
import {motoristasService} from '../service/motoristas.service.js'

const route = express.Router ()

route.get("/motoristas", (req, res) => {
    const data = motoristasService.getAll()
    res.json(data)
    }
)

route.get("/motoristas/:id", (req, res) => {
    const {id} = req.params
    const motorista = motoristasService.getById(id)
    if (!motorista) {
        return res.status(404).json({message: "Motorista não encontrado"})
    }
    res.json(motorista)
})

route.post("/motoristas", (req, res) => {
    const motorista = req.params
    const newMotorista = motoristasService.create(motorista)
    res.status(201).json(newMotorista)
})

route.put("/motoristas/:id", (req, res) => {
    const {id} = req.params
    const motorista = req.body
    const updatedMotorista = motoristasService.update(id, motorista)
    if (!updatedMotorista) {
        return res.status(404).json({message: "Motorista não encontrado"})
    }
    res.json(updatedMotorista)
})

route.patch("/motoristas/:id", (req, res) => {
    const {id} = req.params
    const motorista = req.body
    const updatedMotorista = motoristasService.update(id, motorista)
    if (!updatedMotorista) {
        return res.status(404).json({message: "Motorista não encontrado"})
    }
    res.json(updatedMotorista)
})


route.delete("/motoristas/:id", (req, res) => {
    const {id} = req.params
    const deletedMotorista = motoristasService.delete(id)
    if (!deletedMotorista) {
        return res.status(404).json({message: "Motorista não encontrado"})
    }
    res.json({message: "Motorista deletado com sucesso"})
})

export default route