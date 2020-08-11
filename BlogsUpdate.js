function load() {
                     var myblogsdata = JSON.parse(data);

                     var div = document.getElementById('blogsdata');

                     for(var i = 0;i < myblogsdata.length; i++)
                     {
                        div.innerHTML = div.innerHTML + "<p style='line-height:1%' class='inner' id="+i+">"+"<a href='https://osum-server.blogspot.com/'><font size='+1.3' color='brown'>"+"<u><b>"+ myblogsdata[i].name +"</u></b></a>"+"<p><font size='-1' color= 'brown'><a href='chats/Chats 2019-09-12.html'><b>➤View ChatLogs!</b></p></a></font>" + "</font>" + "</p>";
                     }
                 }
