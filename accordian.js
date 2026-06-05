const titles = document.querySelectorAll(".title");

titles.forEach(title => 
    {
        title.addEventListener("click", () =>
        {
            const content = title.nextElementSibling;

            if(content.style.maxHeight)
            {
                content.style.maxHeight = null;
            }
            else
            {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
