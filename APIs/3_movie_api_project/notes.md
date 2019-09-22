#Notes
*when passing data from one subpage to another:
    <form action="/results" method="GET">
    -Action will determine to which page it will be passed and we will get redirected to that page

    -input name="search" name will be the hey of the value
    - data will be stored in req.query.search when passed to another route
