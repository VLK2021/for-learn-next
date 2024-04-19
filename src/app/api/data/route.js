export async function GET(request) {
    const data = {
        name: 'Bob',
        age: 25,
        bio: 'some info'
    }

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

