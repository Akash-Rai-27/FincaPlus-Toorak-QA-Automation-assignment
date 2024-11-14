import {test,expect} from "@playwright/test"

let userId;

test("Get users", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=1");
    console.log(await response.json());
    expect(response.status(200)).toBe(200)
})

test("Create users", async({request})=>{
    const response = await request.post("https://reqres.in/api/users",
                {
                    data:{
                        "name":"Akash Rai",
                        "Job":"QA Automation"
                    },
                    headers:{
                        "Accept":"application/json"
                    }
                }

    )

    console.log(await response.json());
    expect(response.status(201)).toBe(201);
    let res = await response.json();
    userId = res.id;

    console.log("userid: ",await userId);



})

test("Update users", async({request})=>{
    const response = await request.put(`https://reqres.in/api/users/${userId}`,
        {
            data:{
                "name":"Akash Sky",
                "Job":"SDET Automation"
            },
            headers:{
                "Accept":"application/json"
            }
        }

    )

    console.log(await response.json());
    expect(response.status(200)).toBe(200);
    console.log("userid: ",await userId);

})

test("Delete users", async({request})=>{
    const response = await request.delete(`https://reqres.in/api/users/${userId}`,
    )

    
    expect(response.status(204)).toBe(204);
    
})