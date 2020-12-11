const initializeShaderProgram = (gl) => {
    const vertexShaderCode = document
        .getElementById("vertex-shader-3d").textContent
    const fragmentShaderCode = document
        .getElementById("fragment-shader-3d").textContent
    const vertexShader = loadShader(gl,
        gl.VERTEX_SHADER, vertexShaderCode);
    const fragmentShader = loadShader(gl,
        gl.FRAGMENT_SHADER, fragmentShaderCode);
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    return shaderProgram;
}

const loadShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

const getProgramParameters = (gl, shaderProgram) => {
    return {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation
            (shaderProgram, 'a_coords'),
            textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation
            (shaderProgram, 'u_worldViewProjection'),
            modelViewMatrix: gl.getUniformLocation
            (shaderProgram, 'u_worldInverseTranspose'),
        },
    };
}

