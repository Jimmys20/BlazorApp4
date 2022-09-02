

export async function calculateProof() {
    const { proof, publicSignals } =
        await snarkjs.groth16.fullProve({ a: 3, b: 11 }, "circuit.wasm", "circuit_final.zkey");
}