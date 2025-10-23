// Import React hooks
const { useState, useMemo } = React;

// --- Initial Data ---
const initialPresses = [
    createNewPress('Power Press 1', true), // Load with sample data
    createNewPress('Power Press 2'),
    createNewPress('Power Press 3'),
    createNewPress('Power Press 4'),
];

/**
 * The main application component.
 */
function App() {
    // --- State ---
    const [presses, setPresses] = useState(initialPresses);
    const [selectedPressId, setSelectedPressId] = useState(initialPresses[0]?.id || null);
    const [view, setView] = useState('detail'); // 'detail' or 'overview'

    // --- Event Handlers ---

    /**
     * Add a new press to the system
     */
    const handleAddPress = (name) => {
        const newPress = createNewPress(name);
        setPresses([...presses, newPress]);
        setSelectedPressId(newPress.id);
        setView('detail'); // Switch to detail view for the new press
    };

    /**
     * Update press production data
     */
    const handleUpdatePressData = (newData) => {
        setPresses(presses.map(p =>
            p.id === selectedPressId ? { ...p, data: newData } : p
        ));
    };

    /**
     * Rename the selected press
     */
    const handleRenamePress = (newName) => {
        setPresses(presses.map(p =>
            p.id === selectedPressId ? { ...p, name: newName } : p
        ));
    };

    /**
     * Update target metrics for the selected press
     */
    const handleUpdateTargets = (newTargets) => {
        setPresses(presses.map(p =>
            p.id === selectedPressId ? { ...p, targets: newTargets } : p
        ));
    };

    /**
     * Delete a press from the system
     */
    const handleRemovePress = (id) => {
        if (window.confirm("Are you sure you want to delete this press? This cannot be undone.")) {
            const remainingPresses = presses.filter(p => p.id !== id);
            setPresses(remainingPresses);

            if (selectedPressId === id) {
                setSelectedPressId(remainingPresses[0]?.id || null);
            }
        }
    };

    /**
     * Select a different press
     */
    const handleSelectPress = (id) => {
        setSelectedPressId(id);
        setView('detail'); // Always switch to detail view when selecting a press
    };

    /**
     * Toggle between detail and overview views
     */
    const handleToggleView = () => {
        setView(v => v === 'detail' ? 'overview' : 'detail');
    };

    // --- Memos / Derived State ---

    /**
     * Get the currently selected press object
     */
    const selectedPress = useMemo(() => {
        return presses.find(p => p.id === selectedPressId) || null;
    }, [presses, selectedPressId]);

    /**
     * Calculate metrics for the selected press
     */
    const metrics = useMemo(() => {
        if (!selectedPress) return { availability: 0, performance: 0, quality: 0, oee: 0 };
        return calculateOEE(selectedPress.data);
    }, [selectedPress]);

    /**
     * Get OEE status text
     */
    const oeeStatus = getOeeStatus(metrics.oee);

    // --- Render ---
    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
            <AppHeader
                presses={presses}
                selectedPressId={selectedPressId}
                onSelectPress={handleSelectPress}
                onAddPress={handleAddPress}
                currentView={view}
                onToggleView={handleToggleView}
            />

            {/* Conditional View Rendering */}
            {view === 'overview' && (
                <OverviewView presses={presses} />
            )}

            {view === 'detail' && selectedPress && (
                <DetailView
                    key={selectedPress.id}
                    press={selectedPress}
                    metrics={metrics}
                    oeeStatus={oeeStatus}
                    onUpdateData={handleUpdatePressData}
                    onRename={handleRenamePress}
                    onUpdateTargets={handleUpdateTargets}
                    onRemove={handleRemovePress}
                />
            )}

            {view === 'detail' && !selectedPress && (
                <NoPressView />
            )}
        </div>
    );
}

// --- Render the App ---
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);