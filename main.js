function initWebGL() {
    const canvas = document.getElementById("webgl-canvas");
    const gl = canvas.getContext("webgl2");
    if (!gl) {
	console.error("WebGL does not supported. Check your browser settings!");
	// Show only product picture
	return;
    }

    const vertexShaderResource = `
        attribute vec2 position;
        void main() {
            gl_Position = vec4(position, 0., 1.);
        }
    `;

    const fragmentShaderResource = `
        precision mediump float;
        void main() {
            gl_FragColor = vec4(1., 0., 0., 1.);
        }
    `;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderResource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderResource);
    const shaderProgram = createProgram(gl, vertexShader, fragmentShader);
    gl.useProgram(shaderProgram);

    const vertices = new Float32Array([
	 0.0,  0.5,
	-0.5, -0.5,
	 0.5, -0.5
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(shaderProgram, "position");
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
	gl.deleteShader(shader);
	return null;
    }
    
    return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	console.error("Program linking error:", gl.getProgramInfoLog(program));
	gl.deleteProgram(program);
	return null;
    }

    return program; 
}

window.onload = initWebGL;
