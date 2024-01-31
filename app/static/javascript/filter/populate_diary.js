function populate_diary(pub_filtered) {
    console.log('---- populate_diary:in ' + pub_filtered.length)
    //filter_clear('checks_diary')

    days_of_the_week = [
            ['Mon', 'monday'],
            ['Tue', 'tuesday'],
            ['Wed', 'wednesday'],
            ['Thu', 'thursday'],
            ['Fri', 'friday'],
            ['Sat', 'saturday'],
            ['Sun', 'sunday']
        ]

    for (i=0; i<days_of_the_week.length; i++){
        console.log(days_of_the_week[i])
        console.log(days_of_the_week[i][0])
        console.log(days_of_the_week[i][1])

        var filtered_data = pub_filtered.filter(function(pub) {
            return (pub['event_day'] == days_of_the_week[i][0])
        })
        console.log('filtered: ' + filtered_data.length)

        if (filtered_data.length > 0) {
            document.getElementById(days_of_the_week[i][1] + '_count').textContent = "(" + filtered_data.length + ")"
        } else {
            document.getElementById(days_of_the_week[i][1] + '_count').textContent = ''
        }

        if (document.getElementById(days_of_the_week[i][1] + '_filter').checked) {
            console.log(days_of_the_week[i][1] + ': checked')
            if (document.getElementById(days_of_the_week[i][1] + '_face').classList.contains('carousel_off')) {
                document.getElementById(days_of_the_week[i][1] + '_face').classList.remove('carousel_off')
            }
            document.getElementById(days_of_the_week[i][1] + '_face').classList.add('carousel_on')
        } else {
            console.log('monday UN-checked')
            if (document.getElementById(days_of_the_week[i][1] + '_face').classList.contains('carousel_on')) {
                document.getElementById(days_of_the_week[i][1] + '_face').classList.remove('carousel_on')
            }
            document.getElementById(days_of_the_week[i][1] + '_face').classList.add('carousel_off')
        }
    }
}
