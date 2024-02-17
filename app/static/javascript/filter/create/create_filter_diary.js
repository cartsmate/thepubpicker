function create_filter_diary(pub_filtered) {
    console.log('---- create_filter_diary:in ' + pub_filtered.length)
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
        //console.log(days_of_the_week[i])
        //console.log(days_of_the_week[i][0])
        //console.log(days_of_the_week[i][1])
//        console.log('pub_filtered.length')
//        console.log(pub_filtered.length)
        var filtered_data = pub_filtered.filter(function(pub) {
            return (pub['event_day'] == days_of_the_week[i][1])
        })
//        console.log('filtered: ' + days_of_the_week[i] + " : " + filtered_data.length)

        if (filtered_data.length > 0) {
            document.getElementById(days_of_the_week[i][1] + '_count').textContent = "(" + filtered_data.length + ")"
            document.getElementById(days_of_the_week[i][1] + '_face').style.opacity = '1.0'
            document.getElementById(days_of_the_week[i][1] + '_filter').disabled = false
        } else {
            document.getElementById(days_of_the_week[i][1] + '_count').textContent = ''
            document.getElementById(days_of_the_week[i][1] + '_face').style.opacity = '0.5'
            document.getElementById(days_of_the_week[i][1] + '_filter').disabled = true
        }

        if (document.getElementById(days_of_the_week[i][1] + '_filter').checked) {
            //console.log(days_of_the_week[i][1] + ': checked')
            if (document.getElementById(days_of_the_week[i][1] + '_face').classList.contains('carousel_off')) {
                document.getElementById(days_of_the_week[i][1] + '_face').classList.remove('carousel_off')
            }
            document.getElementById(days_of_the_week[i][1] + '_face').classList.add('carousel_on')
        } else {
            //console.log('monday UN-checked')
            if (document.getElementById(days_of_the_week[i][1] + '_face').classList.contains('carousel_on')) {
                document.getElementById(days_of_the_week[i][1] + '_face').classList.remove('carousel_on')
            }
            document.getElementById(days_of_the_week[i][1] + '_face').classList.add('carousel_off')
        }
    }
}
