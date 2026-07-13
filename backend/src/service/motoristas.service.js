const motoristas = [
    { id: 1, nome: "João", idade: 30, cnh: "123456789", veiculo: "Carro" },
    { id: 2, nome: "Maria", idade: 25, cnh: "987654321", veiculo: "Moto" },
    { id: 3, nome: "Pedro", idade: 35, cnh: "456789123", veiculo: "Caminhão" }
]

class MotoristasService {
    getAll() {
        return motoristas
    }

    getById(id) {
        return motoristas.find(motoristas => motoristas.id === parseInt(id))
    }

    create(motorista) {
        const index = motoristas.findIndex(motoristas => motoristas.id === parseInt(id));
        if (index === -1) {
            motoristas[index].motoristas = motoristas;
            return motorista [index];
        }
        return null;
    }   

    update(id, motorista) {
        const index = motoristas.findIndex(motoristas => motoristas.id === parseInt(id))
        if (index !== -1) {
            motoristas[index].motoristas = motoristas;
            return motorista[index]
        }
        return null;
    }

    delete(id) {
        const index = motoristas.findIndex(motoristas => motoristas.id === parseInt(id))
        if (index !== -1) {
            const deletedMotorista = motoristas[index]
            motoristas.splice(index, 1)
            return deletedMotorista
        }
        return null
    }
}

export const motoristasService = new MotoristasService()