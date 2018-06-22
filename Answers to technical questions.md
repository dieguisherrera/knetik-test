# Diego Herrera 

## Technical questions

#### **1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

I worked for four nights in total, approximately thre to four hours each night. Although the first 2 I used them to investigate and update me in the tools I would use, especially the new features of Angular6 and Angular Material. One more night to answer these questions. 

If I had had more time, I would have looked for a way to understand and show the related devices (location and parent_location), although asking more in depth the needs of the product owners.

I would have developed a technique to update the data live, although it would be best to use socket.io with notifications so that the control of the update comes from the server optimally, bringing only the records that are updated and using Observables in Front -End.

I would also have dockerized the application and worked more on more advanced filters, although the limitation of the API did not allow much. Also I would standardized the design and styles, along with a stand-alone components to define a optimal architecture for scale.

Thinking about scalability, I would have programmed thinking of millions of devices updating continuously live, looking for a good cache strategy. Having a central store like redux would be very robust in this cases, although today there's a new tool called ngrx for this cases. 

If the locations represent coordinates, would be nice to show it in a map.

#### **2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

Angular 6 comes with a scaffolding tool that saves me a lot of time. The command ng, also offers secure ways to include packages, create components, services, routing and so on.

Angular Material is a good way to start theming the app, with commands to save time. In that way I can focus more on the logic, creating a good scheme of code for a robust architecture.

Some commands I used are: ng generate component and ng generate services

But, the main feature of typescript language that definetly I'g going to start using is async await. It a better and clear way to manage asynchronous functions. I used to write code with observables like this

getDataUsingSubscribe() {
    this.httpClient.get<Employee>(this.url).subscribe(data => {
      this.subscribeResult = data;
      console.log('Subscribe executed.')
    });
    console.log('I will not wait until subscribe is executed..');
  }

But with async await would look like this:

async getAsyncData() {
    this.asyncResult = await this.httpClient.get<Employee>(this.url).toPromise();
    console.log('No issues, I will wait until promise is resolved..');
  }

  #### **3. How would you track down a performance issue in production? Have you ever had to do this?.**

  Production is a very delicate environment, so is important to write optimal code in efficient deploy scheme. Reduce points of failure and encapsulated, following the SOLID principles. QA process and continuos delivery should consider this test. Tools like protractor and jasmine are useful for that, I have experiencie whit those.

  Looking logs is not always posible, in angular for example AOT compilations limit that.. so we need to control de specific part of the problem, If we code well with sepation of concerns it would be posible that one component not afects others. Having server side control is another way to avoid that in most cases. Having a staging enviroment with the same conditions of productions is a good place to test rapid solutions, and deploy that as quick as posible.

  Theres a lot of guides for perfomance https://blog.oasisdigital.com/2017/angular-runtime-performance-guide/, is a good practice to look for the specific tool used in Front and Back end.

  #### **4. How would you improve the Knetik APIs that you just used?.**

  If I had acces to the api, I would turn REST API into a complete GraphQL API, in that way more filters would be posible in one call, there's tool to connect FE with that. The important thing is to mantain separated the data store not depending of the middle conectors.

  The api would support more filters and operators in a more natural language maner. For example to filter multiple columns, date ranges. 

    Ex:   date_update>XXXXXX & signal<-10
  
  Implementing a socket.io in the Backend allow to serve live data, I connect that directly to an NGRX store in angular. In that way we could have a real time and optim app. I have experience serving live data. 

  The idea is to support all kinds of future interfaces to control those devices, that nears to the natural language.

  #### **5. Please describe yourself using JSON..**


  {
    "bio": {
        "firstName": "Diego",
        "lastName": "Herrera"
    },
    "hobbies": [
        {
            "name": "Music",
            "dedication": "1 day"
        },
        {
            "name": "Family",
            "dedication": "daily"
        }
    ],
    "tittles": [{
        "name": "MBA",
        "university": "UNIR",
        "year": "2017"
    },{
        "name": "Engineer",
        "university": "ESPOL",
        "year": "2011"
    }],
    "habilities": [{
        "name": "Bussined Developer",
        "scale": 70
    },{
        "name": "Project Managment",
        "scale": 75
    },{
        "name": "Agile Software Develop",
        "scale": 80
    },{
        "name": "Angular",
        "scale": 90
    },{
        "name": "Lean & Scrum",
        "scale": 90
    },{
        "name": "Node",
        "scale": 65
    },{
        "name": "Mongo",
        "scale": 70
    }],
    "competences": [{
        "name": "Proactive and innovative",
        "references": true
    },{
        "name": "Leadership and teamwork",
        "references": true
    },{
        "name": "Motivation to solve problems",
        "references": true
    },{
        "name": "Responsible and autonomous",
        "references": true
    }]
}