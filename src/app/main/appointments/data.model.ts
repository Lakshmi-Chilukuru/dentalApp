export interface appointment{
    time:string;
    name:string,
    mobile:number,
    treatmentType:string,
    doctorName:string,
    status:string,
    check:string
}

export const AppointmentsData:appointment[] =[
    {
        time:"9:00",
        name:'Lakshmi',
        mobile:9391451299,
        treatmentType :"Root Canal",
        doctorName :"Narayana",
        status:"Pending",
        check :"schedule"
    },
    {
        time:"9:00",
        name:'Lakshmi',
        mobile:9391451299,
        treatmentType :"Root Canal",
        doctorName :"Narayana",
        status:"Completed",
        check: "check_circle"
    },
    {
        time:"9:00",
        name:'Lakshmi',
        mobile:9391451299,
        treatmentType :"Root Canal",
        doctorName :"Narayana",
        status:"Delayed",
        check:"error"
    },
    {
        time:"9:00",
        name:'Lakshmi',
        mobile:9391451299,
        treatmentType :"Root Canal",
        doctorName :"Narayana",
        status:"In Progress",
        check:"person"
    },
    {
        time:"9:00",
        name:'Lakshmi',
        mobile:9391451299,
        treatmentType :"Root Canal",
        doctorName :"Narayana",
        status:"Pending",
        check: "schedule"
    }
]