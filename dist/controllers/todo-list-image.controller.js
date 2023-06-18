"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListImageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoListImageController = class TodoListImageController {
    constructor(todoListImageRepository) {
        this.todoListImageRepository = todoListImageRepository;
    }
    async create(todoListImage) {
        return this.todoListImageRepository.create(todoListImage);
    }
    async count(where) {
        return this.todoListImageRepository.count(where);
    }
    async find(filter) {
        return this.todoListImageRepository.find(filter);
    }
    async updateAll(todoListImage, where) {
        return this.todoListImageRepository.updateAll(todoListImage, where);
    }
    async findById(id, filter) {
        return this.todoListImageRepository.findById(id, filter);
    }
    async updateById(id, todoListImage) {
        await this.todoListImageRepository.updateById(id, todoListImage);
    }
    async replaceById(id, todoListImage) {
        await this.todoListImageRepository.replaceById(id, todoListImage);
    }
    async deleteById(id) {
        await this.todoListImageRepository.deleteById(id);
    }
    async getTodoList(id) {
        return this.todoListImageRepository.todoList(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/todo-list-images', {
        responses: {
            '200': {
                description: 'TodoListImage model instance',
                content: {
                    'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage) },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage, {
                    title: 'NewTodoListImage',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/todo-list-images/count', {
        responses: {
            '200': {
                description: 'TodoListImage model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.TodoListImage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/todo-list-images', {
        responses: {
            '200': {
                description: 'Array of TodoListImage model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.TodoListImage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/todo-list-images', {
        responses: {
            '200': {
                description: 'TodoListImage PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.TodoListImage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.TodoListImage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/todo-list-images/{id}', {
        responses: {
            '200': {
                description: 'TodoListImage model instance',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.TodoListImage, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/todo-list-images/{id}', {
        responses: {
            '204': {
                description: 'TodoListImage PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.TodoListImage]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/todo-list-images/{id}', {
        responses: {
            '204': {
                description: 'TodoListImage PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.TodoListImage]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/todo-list-images/{id}', {
        responses: {
            '204': {
                description: 'TodoListImage DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/todo-list-images/{id}/todo-list', {
        responses: {
            '200': {
                description: 'TodoList belonging to TodoListImage',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.TodoList) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListImageController.prototype, "getTodoList", null);
TodoListImageController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TodoListImageRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoListImageRepository])
], TodoListImageController);
exports.TodoListImageController = TodoListImageController;
//# sourceMappingURL=todo-list-image.controller.js.map