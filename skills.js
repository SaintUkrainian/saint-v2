class Skill {
    constructor(name, imageUrl){
        this.name = name;
        this.imageUrl = imageUrl;
    }

    render(){
        const skill = document.createElement("li");
    }

    createSkillElement(skill){
        const skillHtml = document.createElement("li");
        
        skillHtml.innerHTML = `
            <div class="skill-item-container">
            
            </div>
        `;

        
    }
}