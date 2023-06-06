const alumnos = require('../../data/alumnos.json')
const httpStatusCodes = require('http2').constants;

const getAlumnos = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(alumnos)
}

const getAlumnnoByDni = (req, res) => {
    const { dni } = req.params
    const alumno = alumnos.find((v) => v.dni == dni)
  
    if (alumno) {
      res.json(alumno)
    } else {
      res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({ error: 'Alumno no encontrado' })
    }

}

const modificarAlumno = (req, res) => {
  const { dni } = req.params;
  const { habilitado, celiaco, edad } = req.body;

  const alumno = alumnos.find((v) => v.dni === dni);

  if (!alumno) {
    res.status(httpStatusCodes.NOT_FOUND).json({ error: 'Alumno no encontrado' });
    return;
  }

  if (habilitado !== undefined) {
    alumno.habilitado = habilitado;
  }

  if (celiaco !== undefined) {
    alumno.celiaco = celiaco;
  }

  if (edad !== undefined) {
    alumno.edad = edad;
  }

  res.json({ message: 'Alumno actualizado correctamente', alumno });
};

const darAlumnoDeAlta = (req, res) => {
  const { dni, nombre, celiaco, edad } = req.body;

  const existeAlumno = alumnos.find((v) => v.dni === dni);

  if (dni.length>8 || dni != number) {
    res.status(httpStatusCodes.BAD_REQUEST).json({ error: "DNI incorrecto" });
    return;
  }
  if (existeAlumno) {
    res.status(httpStatusCodes.BAD_REQUEST).json({ error: 'El alumno ya está registrado' });
    return;
  }

  if (edad < 18 || edad > 99) {
    res.status(httpStatusCodes.BAD_REQUEST).json({ error: 'Edad inválida' });
    return;
  }

  const nuevoAlumno = {
    dni: dni,
    nombre: nombre,
    habilitado: true,
    celiaco: celiaco,
    edad: edad
  };

  alumnos.push(nuevoAlumno);

  res.status(httpStatusCodes.CREATED).json({ message: 'Alumno cargado con éxito', alumno: nuevoAlumno });
};
module.exports = {getAlumnos,
getAlumnnoByDni,
modificarAlumno,
darAlumnoDeAlta}