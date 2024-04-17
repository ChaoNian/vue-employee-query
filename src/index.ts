import Vue from 'vue'
import EmployeeQuery from './components/EmployeeQuery.vue' 

let app = new Vue({
    el:'app',
    components: {
        EmployeeQuery
    },
    template: `<div>AAA
    <employee-query @query="getParam" :department="department" />
    </div>`,
    data: {
        department: [
            {department: '技术总监1', departmentId: 1},
            {department: '技术总监2', departmentId: 2},
            {department: '技术总监3', departmentId: 3},
            {department: '技术总监4', departmentId: 4}
        ]
    },
    methods: {
        getParam(param: any) {
            // console.log(param, 'param');
        }
    }
})
