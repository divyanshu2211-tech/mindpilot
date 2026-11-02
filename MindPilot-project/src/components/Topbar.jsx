import { Menu, Download, Upload, RotateCcw } from "lucide-react";

export default function Topbar({ active = "Overview", onMenu, onExport, onImport, onReset }) {
  return <header className="topbar"><button className="mobile-menu" onClick={onMenu} aria-label="Open navigation"><Menu size={21}/></button><div className="breadcrumb">Workspace <span>/</span> <b>{active}</b></div><div className="top-actions"><span className="local-pill"><i/> Saved locally</span><button className="icon-action" onClick={onExport} title="Export backup"><Download size={17}/><span>Backup</span></button><label className="icon-action upload-action" title="Import backup"><Upload size={17}/><span>Restore</span><input type="file" accept="application/json,.json" onChange={onImport}/></label><button className="icon-action reset-action" onClick={onReset} title="Reset data"><RotateCcw size={16}/></button></div></header>;
}
