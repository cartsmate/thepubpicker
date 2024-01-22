//function pre_populate(feature, station, filters_str) {
function pre_populate(filters_str) {
    console.log('-- pre_populate: ' + filters_str)
    if (filters_str != 'dl,sl,fl' && filters_str != null) {
        var filters_list = filters_str.split(',');
        d_list = []
        d_obj = {}
        s_list = []
        s_obj = {}
        f_list = []
        f_obj = {}

        for (i=0; i < filters_list.length; i++) {
            if (filters_list[i] == 'dl') {
                d_obj['start'] = i;
                break;
            }
        }
        for (i=0; i < filters_list.length; i++) {
            if (filters_list[i] == 'sl') {
                s_obj['start'] = i;
                break;
            }
        }
        for (i=0; i < filters_list.length; i++) {
            if (filters_list[i] == 'fl') {
                f_obj['start'] = i;
                break;
            }
        }

        d_list = filters_list.slice(d_obj['start']+1,s_obj['start'])
        for (i=0; i < d_list.length; i++) {
            console.log(d_list[i])
            document.getElementById(d_list[i] + "_filter").checked = true
        }

        s_list = filters_list.slice(s_obj['start']+1, f_obj['start'])
        for (i=0; i < s_list.length; i++) {
            console.log(s_list[i])
            document.getElementById(s_list[i] + "_filter").checked = true
        }

        f_list = filters_list.slice(f_obj['start']+1)
        for (i=0; i < f_list.length; i++) {
            console.log(f_list[i])
            document.getElementById(f_list[i] + "_filter").checked = true
        }

    }
}