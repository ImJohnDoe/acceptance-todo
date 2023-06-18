"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListTodoListImageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoListTodoListImageController = class TodoListTodoListImageController {
    constructor(todoListRepository) {
        this.todoListRepository = todoListRepository;
    }
    async get(id, filter) {
        return this.todoListRepository.image(id).get(filter);
    }
    async create(id, todoListImage) {
        return this.todoListRepository.image(id).create(todoListImage);
    }
    async patch(id, todoListImage, where) {
        return this.todoListRepository.image(id).patch(todoListImage, where);
    }
    async delete(id, where) {
        return this.todoListRepository.image(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/todo-lists/{id}/todo-list-image', {
        responses: {
            '200': {
                description: 'TodoList has one TodoListImage',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodoListImageController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/todo-lists/{id}/todo-list-image', {
        responses: {
            '200': {
                description: 'TodoList model instance',
                content: {
                    'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage) },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TodoListImage, {
                    title: 'NewTodoListImageInTodoList',
                    exclude: ['id'],
                    optional: ['todoListId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodoListImageController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/todo-lists/{id}/todo-list-image', {
        responses: {
            '200': {
                description: 'TodoList.TodoListImage PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
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
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.TodoListImage))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodoListImageController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/todo-lists/{id}/todo-list-image', {
        responses: {
            '200': {
                description: 'TodoList.TodoListImage DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.TodoListImage))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodoListImageController.prototype, "delete", null);
TodoListTodoListImageController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TodoListRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoListRepository])
], TodoListTodoListImageController);
exports.TodoListTodoListImageController = TodoListTodoListImageController;
//# sourceMappingURL=todo-list-todo-list-image.controller.js.map