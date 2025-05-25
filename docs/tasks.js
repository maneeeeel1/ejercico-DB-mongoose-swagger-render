module.exports = {
  paths: {
    '/create': {
      post: {
        tags: {
            Tasks: "Create Task",
        },
        description :"Create Task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Task' }
            }
          }
        },
        responses: {
          201: {
            description: 'Tarea creada',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Task' }
              }
            }
          },
          500: {
            description: "Error al crear la tarea"
          }
        }
      }
    },
    '/': {
      get: {
        tags: ['Tasks'],
        summary: 'Get All Tasks',
        description: 'Obtiene todas las tareas.',
        operationId: 'getTasks',
        responses: {
          200: {
            description: 'Lista de tareas',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Task' }
                }
              }
            }
          },
          500: {
            description: 'Error al obtener las tareas'
          }
        }
      }
    },

    '/id/{_id}': {
      get: {
        tags: ['Tasks'],
        summary: 'Get Task by ID',
        description: 'Obtiene una tarea por su ID.',
        operationId: 'getTaskById',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: {
            description: 'Tarea encontrada',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Task' }
              }
            }
          },
          500: {
            description: 'Error al buscar la tarea'
          }
        }
      },

      put: {
        tags: ['Tasks'],
        summary: 'Update Task Title',
        description: 'Actualiza solo el título de la tarea. No permite modificar el campo "completed".',
        operationId: 'updateTaskTitle',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' }
                },
                required: ['title']
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Título actualizado',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Task' }
              }
            }
          },
          500: {
            description: 'Error al actualizar el título'
          }
        }
      },

      delete: {
        tags: ['Tasks'],
        summary: 'Delete Task',
        description: 'Elimina una tarea por ID.',
        operationId: 'deleteTask',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: {
            description: 'Tarea eliminada',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Task' }
              }
            }
          },
          500: {
            description: 'Error al eliminar la tarea'
          }
        }
      }
    },

    '/markAsCompleted/{_id}': {
      put: {
        tags: ['Tasks'],
        summary: 'Mark Task as Completed',
        description: 'Marca una tarea como completada (no se permite modificar el título).',
        operationId: 'markAsCompleted',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: {
            description: 'Tarea marcada como completada',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Task' }
              }
            }
          },
          500: {
            description: 'Error al marcar como completada'
          }
        }
      }
    }
  }
};