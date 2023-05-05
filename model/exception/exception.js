function BadRequestException(res, message) {
    return res.status(400).json({ type: "BAD_REQUEST", message: message})
}

function NotFountException(res, message) {
    return res.status(404).json({ type: "NOT_FOUND", message: message})
}

function ForbiddenException(res, message) {
    return res.status(403).json({ type: "FORBIDDEN", message: message})
}

function InternalServerException(res) {
    return res.status(500).json({ type: "INTERNAL_SERVER_ERROR", message: "Server Error"})
}

function NotImplementedException(res) {
    return res.status(501).json({ type: "NOT_IMPLEMENTED", message: "Ressourse not implemented"})
}


module.exports={ 
    BadRequestException, 
    NotFountException, 
    ForbiddenException, 
    InternalServerException, 
    NotImplementedException 
}