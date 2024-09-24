export default function Navbar() {
    return (
        <header className="bg-black text-white flex px-4 items-center">
        <h1 className="text-3xl">DIO</h1>
        <div className="ml-auto flex justify-evenly">
            <div className="m-4 py-1">Home</div>
            <button className="my-4 bg-slate-600 rounded-2xl px-12 py-1">Entrar</button>
            <button className="my-4 mr-8 ml-4 bg-slate-600 rounded-2xl px-12 py-1">Cadastrar</button>
        </div>
        </header>
    );
}