export async function GET(request) {
    const data = [
        {id: 'u1', name: 'Bob', age: 25, bio: 'some info'},
        {id: 'u2', name: 'Vic', age: 35, bio: 'hfsj sdhjf dksj'},
    ]

    return new Response(JSON.stringify(data));
}


export async function POST(request) {
    return new Response(request.body);
}

export async function PUT(request) {
    return new Response(request.body);
}

export async function DELETE(request) {
    return new Response(request.body);
}

