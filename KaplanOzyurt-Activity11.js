$(document).ready(function () {
    //on click for <a> element
    $("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
        var filename = "json_files/" + title + ".json"; // Adjusted path
        consumeJSON(filename);
    });

}); // end ready

function consumeJSON(jsonFileURL) {
    $.ajax({
        url: jsonFileURL,
        dataType: "json", // Changed to JSON dataType
        success: function (data) {
            // Display results
            $("main > h2").html(data.speakers[0].month + "<br/>" + data.speakers[0].speaker);
            $("main > h1").html(data.speakers[0].title);
            $("main > img").attr("src", data.speakers[0].image);
            $("main > p").html(data.speakers[0].text);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error loading JSON:', textStatus, errorThrown); // Log the error
            alert('Error loading data for ' + jsonFileURL);
        }
    });
}