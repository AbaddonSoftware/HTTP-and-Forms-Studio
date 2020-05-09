function init() {
    let form = document.getElementById("searchForm");
    const searchOptions = {
        'google': 'https://google.com/search',
        'bing': 'https://bing.com/search',
        'duckduckgo': 'https://duckduckgo.com/',
        'ask': 'https://ask.com/web'
    };

    function validateInput() {
        let errorBox = document.getElementById("error");
        errorBox.innerHTML = "";
        let searchTextExists = document.querySelector("input[name=q]").value !== "";
        let checkedRadioExists = document.querySelector("input[name=engine]:checked");
        let invalidSearchText = "<span style='color:red;'> Error: Please input text for us to search for. </span>";
        let invalidSelectRadio = "<span style='color:red;'> Error: Please select a search engine for us to search. </span>";
        searchTextExists ? null : errorBox.innerHTML += invalidSearchText;
        checkedRadioExists ? null : errorBox.innerHTML += invalidSelectRadio;
        return searchTextExists && checkedRadioExists;
    }

    form.addEventListener("submit", function(event) {
        if (validateInput()) {
            let formAction = searchOptions[document.querySelector("input[name=engine]:checked").value];
            form.action = formAction;
        }
        else {
            event.preventDefault();
        }
    });
}


window.onload = init;
