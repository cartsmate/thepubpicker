function get_flask_data(all_data) {
// array to json
    console.log('GET_FLASK_DATA')
    //return 'test'


    //data = {{ all_data | tojson }}
    console.log('received data')
    console.log(all_data)
    //console.log('all_data.responseText')
    //const info = JSON.parse
    //console.log(all_data.responseText)
    /*
    $.ajax({
        url: '/data.json',
        dataType: 'json',
        success: function(all_data) {
            console.log(all_data);
        }
    })

    //new_data ='cHViX2lkZW50aXR5LGFyZWFfaWRlbnRpdHksc3RhdGlvbl9pZGVudGl0eSxwdWJfZGVsZXRpb24scHViX25hbWUsYWRkcmVzcyxjYXRlZ29yeSxjb2xvdXIscGxhY2UscHViX2xhdGl0dWRlLHB1Yl9sb25naXR1ZGUscmFuayxkZXRhaWwscmV2aWV3X2lkZW50aXR5LHJldmlld19kZWxldGlvbixicnVuY2gsZGFydCxlbnRlcnRhaW4sZmF2b3VyaXRlLGdhcmRlbixoaXN0b3J5LGxhdGUsbXVzaWMscG9vbCxxdWl6LHJvYXN0LHNwb3J0LHN0YXRpb25fZGVsZXRpb24sc3RhdGlvbl9uYW1lLHN0YXRpb25fbGF0aXR1ZGUsc3RhdGlvbl9sb25naXR1ZGUsem9uZSxwb3N0Y29kZSxkaXJlY3Rpb25faWRlbnRpdHksZGlyZWN0aW9uX25hbWUsZGlyZWN0aW9uX2RlbGV0aW9uLG1vbmRheSx0dWVzZGF5LHdlZG5lc2RheSx0aHVyc2RheSxmcmlkYXksc2F0dXJkYXksc3VuZGF5CjZkOWM4ZDRlLWZhMWQtNDMzZC1hZWE0LWZmM2Y1YzM2Y2I2NCwwMDc2M2E3Ni03NTA0LTRmZDEtODRlMS01NzE4NGM0NGU0NmYsZjViOTRjNjQtYmViNS00Mjk1LTk1YTEtMzRmYzFmNWI1YThkLHRydWUsU2hhcmQgUXVhcnRlciwiMjk3IEhveHRvbiBTdCwgTG9uZG9uIE4xIDVKWCwgVUsiLEJhciwjMDAwMDAwLENoSUp0YThDRVpvZGRrZ1J6VVBGRk82dFlIYyw1MS41MDQyOTk5ODQ2NTAwNiwtMC4wODYzNzExNTM1OTMwNjMzLDQuNixXb21lbiBtYWRlIHdpbmUgc2hvcCxiNDdjMDgwMS05YWViLTQ1OTEtYWRjZi05Y2RjOTM1YWVmMTcsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsTG9uZG9uIEJyaWRnZSw1MS41MDQ2NzQyMDkzMDQzMywtMC4wODYwMDU1OTc3NDgxMzk2LDEsU0UxIDJTVyw0ZThjZTU4ZS1kYWVhLTRkOTMtOTQ5MC0xMWUwNzI0ZTY0NDUsU291dGgsZmFsc2Usbm8gZXZlbnRzLG5vIGV2ZW50cyxubyBldmVudHMsbm8gZXZlbnRzLG5vIGV2ZW50cyxubyBldmVudHMsbm8gZXZlbnRzCmZkMWY2MDUzLTg4NjgtNDE5YS1hNDQ1LWZkMjRhMjFlOGI5OSw3MWY1ODlmYi1mNjE3LTQ4YjktYjc3OS1kYzFlOGQ3M2IxZmUsMTdkOWFiMzktMzE4ZC00MTg3LWJkY2ItYTZhYTMxNWQxOTk3LGZhbHNlLFllIE9sZGUgV2F0bGluZywiMjkgV2F0bGluZyBTdCwgR3JlYXRlciwgTG9uZG9uIEVDNE0gOUJSLCBVSyIsQmFyLCMwMDAwMDAsQ2hJSnkyUXBmVlVEZGtnUl9aakhNVHdmMjhBLDUxLjUxMjkyMjQyOTc2MjU2LC0wLjA5MzU0NDcyMTYwMzM5MzUsNC4wLFRyYWRpdGlvbmFsIHB1Yiw5OTFiZDYwNC0wNjMxLTQ3Y2YtYjY5NC00NTA5OTIxMmE0MDYsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsdHJ1ZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxNYW5zaW9uIEhvdXNlLDUxLjUxMjA5MTU5ODQ1MTEsLTAuMDk0MTk3NjU3MjQzNzg0MiwxLEVDNE4gNkpELGZhM2E5Yzc5LTk5NDgtNDkyMy1hYzQxLTU1ZTU5NjJmYWJhOSxDZW50cmFsLGZhbHNlLG5vIGV2ZW50cyxubyBldmVudHMsbm8gZXZlbnRzLG5vIGV2ZW50cyxubyBldmVudHMsbm8gZXZlbnRzLG5vIGV2ZW50cwo='
    //let result = all_data.substring(6, all_data.length - 5);
    //console.log('less quotes')
    //console.log(result)

    console.log('my_bytes_value')
    console.log(my_bytes_value)
    my_json = my_bytes_value.decode('utf8').replace("'", '"')
    console.log('my_json')
    console.log(my_json)

    // bytes to json

    //    var bytes = new Int32Array([101, 102, 103]);


    var bytes = all_data
    console.log('bytes')
    console.log(bytes)

    var allDataBinding = encodeURIComponent(JSON.stringify(all_data))
    console.log('allDataBinding')
    console.log(allDataBinding)
    /*
    var s = JSON.stringify(all_data, function(k, v) {
        if (v instanceof  Int32Array) {
            return Array.apply([], v);
        }
        return v;
    });
    console.log('json.stringify')
    console.log(s)

    data = s

    JSZip.loadAsync(all_data)then(function (zip) {
        var file = zip.file(/zip/);
        return file.async("blob");

    }).then(async function success(text) {
        var fileReader = await text.arrayBuffer();
        const binData = new Uint8Array(fileReader);
        var parsed = pako.ungzip(binData,{ 'to':'string' });
    });
    console.log('parsed')
    console.log(parsed)
    /*
    return parsed

    var strData = atob(all_data)
    console.log('strData')
    console.log(strData)

    var charData = strData.split('').map(function(x){return x.charCodeAt(0);})
    console.log('charData')
    console.log(charData)

    var binData = new Uint8Array(charData)
    console.log('binData')
    console.log(binData)

    //var data = pako.inflate(all_data, {raw: true})
    //var data = pako.inflateRaw(all_data)
    //var data = pako.inflate(all_data)
    console.log('data')
    console.log(data)

    var strData = String.fromCharCode.apply(null, new Uint16Array(data))
    console.log('strData')
    console.log(strData)
//    let original_str = pako.ungzip(compressed_str, { to: 'string'})
//    let original_str = pako.inflate(compressed_str)
//    console.log('original_string')
//    console.log(original_str)
    */

    return all_data

}
