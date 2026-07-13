import express from 'express'
import {motoristasService} from '../service/motoristas.service.js'

const route = express.Router ()

route.get("/", (req, res) => {
    try {
        const motoristas = motoristasService.getAll()
        res.json(motoristas)
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar motoristas"})
    }
})

route.get("/:id", (req, res) => {
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