function Task(){
    let tasks=[];
    return {
         addTask : function( {title,status="pending"}){
        tasks.push({title,status})
    },
        displayTask: function(){
            tasks.sort((a,b)=>{ return a.title.localeCompare(b.title)}).forEach((ele)=>{
                console.log(ele.title)
            })
        },

        completingTask: function(){
            tasks.map((ele)=>{
                if(ele.title=="LeetCode Questions" || ele.title=="Brooming" || ele.title=="Meditation")
                    ele.status="Completed";
                 })
               //  console.log(tasks);
        },
        pendingTask: function(){
            let filterPending=tasks.filter((ele)=>(ele.status=="pending"))
            console.log(filterPending)
         
        },
        completedTasks: function(){
            let filterCompleted=tasks.filter((ele)=>(ele.status=="Completed"))
            console.log(filterCompleted)
        },
        counting_Completed_Pending_Reduce : function(){
            let count=tasks.reduce((counter,items)=>{
                counter[items.status]=(counter[items.status]||0)+1
                return counter
             },{})
             console.log(count)
        }

    }
        


}


let add=Task();
add.addTask({ title: "Preparing Sandwich"})
add.addTask({title: "Meditation"})
add.addTask({ title: "Bathing"})
add.addTask({title: "Running"})
add.addTask({ title: "Reconciling with Girlfriend"})
add.addTask({title: "LeetCode Questions"})
add.addTask({ title: "Brooming"})
add.addTask({title: "Project"})
add.displayTask();

add.completingTask();
add.displayTask();
add.pendingTask();
add.completedTasks();

add.counting_Completed_Pending_Reduce();
