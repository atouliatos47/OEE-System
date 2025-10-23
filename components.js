// Import React
const { useState } = React;

// --- SVG Icons ---
const LogoIcon = () => (
    <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.835 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.532 1.532 0 012.287-.947c1.372.835 2.942-.734 2.106-2.106a1.532 1.532 0 01-.947-2.287c1.561-.379 1.561-2.6 0 2.978a1.532 1.532 0 01-.947-2.287c.835-1.372-.734-2.942-2.106-2.106A1.532 1.532 0 0111.49 3.17zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);

const ChartPieIcon = () => (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
);

const TableCellsIcon = () => (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 10.5h19.5M10.125 4.5v15" />
    </svg>
);

// --- Reusable Form Input Component ---
const FormInput = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-600">{label}</label>
        <div className="mt-1">
            <input
                type="number"
                value={value}
                onChange={onChange}
                min="0"
                className="form-input block w-full"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        e.currentTarget.blur();
                    }
                }}
            />
        </div>
    </div>
);

// --- OEE Gauge Component ---
const OeeGauge = ({ oee, status }) => {
    const oeeColor = getOeeColor(oee);
    const strokeDasharray = `${oee} ${100 - oee}`;

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700">Overall Equipment Effectiveness</h2>
            <div className="relative my-4 h-48 w-48">
                {/* Background Circle */}
                <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                        className="text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                </svg>
                {/* Foreground Circle */}
                <svg className={`absolute left-0 top-0 h-full w-full -rotate-90 ${oeeColor}`} viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                    />
                </svg>
                {/* Text in Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-5xl font-bold ${oeeColor}`}>
                        {oee.toFixed(1)}
                        <span className="text-3xl">%</span>
                    </span>
                </div>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${oeeColor} ${getOeeBgColor(oee)} bg-opacity-10`}>
                {status}
            </span>
        </div>
    );
};

// --- Metric Card Component ---
const MetricCard = ({ title, value, target, icon }) => {
    const colorClass = getMetricColor(value, target);

    return (
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div>
                <div className="text-sm font-medium text-gray-500">{title}</div>
                <div className={`mt-1 text-4xl font-bold ${colorClass}`}>
                    {value.toFixed(1)}
                    <span className="text-2xl">%</span>
                </div>
                {target !== undefined && (
                    <div className="text-sm text-gray-400">Target: {target.toFixed(1)}%</div>
                )}
            </div>
            <div className={`rounded-full p-3 ${colorClass.replace('text-', 'bg-')} bg-opacity-10`}>
                {icon}
            </div>
        </div>
    );
};

// --- Bar Chart Component ---
const OeeBarChart = ({ metrics, targets }) => {
    const chartData = [
        { name: 'Availability', actual: metrics.availability, target: targets.availability },
        { name: 'Performance', actual: metrics.performance, target: targets.performance },
        { name: 'Quality', actual: metrics.quality, target: targets.quality },
    ];

    const maxVal = 100;

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700">OEE Components Breakdown</h3>
            <div className="mt-6 flex justify-around space-x-4">
                {chartData.map((item) => (
                    <div key={item.name} className="flex flex-1 flex-col items-center">
                        <div className="relative flex h-40 w-full items-end justify-center space-x-2">
                            <div
                                className="w-10 rounded-t-md bg-blue-500 transition-all duration-500"
                                style={{ height: `${(item.actual / maxVal) * 100}%` }}
                                title={`Actual: ${item.actual.toFixed(1)}%`}
                            />
                            <div
                                className="w-10 rounded-t-md bg-green-400 transition-all duration-500"
                                style={{ height: `${(item.target / maxVal) * 100}%` }}
                                title={`Target: ${item.target}%`}
                            />
                        </div>
                        <div className="mt-2 text-sm font-medium text-gray-600">{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex items-center justify-center space-x-4">
                <div className="flex items-center">
                    <div className="h-3 w-3 rounded-sm bg-blue-500" />
                    <span className="ml-2 text-sm text-gray-500">Actual %</span>
                </div>
                <div className="flex items-center">
                    <div className="h-3 w-3 rounded-sm bg-green-400" />
                    <span className="ml-2 text-sm text-gray-500">Target %</span>
                </div>
            </div>
        </div>
    );
};

// --- Data Entry Form ---
const DataEntryForm = ({ data, onChange }) => {
    const handleInputChange = (field, value) => {
        const numericValue = Math.max(0, parseFloat(value) || 0);
        onChange({
            ...data,
            [field]: numericValue,
        });
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700">Manual Data Entry</h3>
            <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                <FormInput
                    label="Planned Production Time (min)"
                    value={data.plannedProductionTime}
                    onChange={(e) => handleInputChange('plannedProductionTime', e.target.value)}
                />
                <FormInput
                    label="Actual Run Time (min)"
                    value={data.actualRunTime}
                    onChange={(e) => handleInputChange('actualRunTime', e.target.value)}
                />
                <FormInput
                    label="Ideal Cycle Time (min/piece)"
                    value={data.idealCycleTime}
                    onChange={(e) => handleInputChange('idealCycleTime', e.target.value)}
                />
                <FormInput
                    label="Total Pieces Produced"
                    value={data.totalPartsProduced}
                    onChange={(e) => handleInputChange('totalPartsProduced', e.target.value)}
                />
                <FormInput
                    label="Good Pieces (Quality)"
                    value={data.goodPartsProduced}
                    onChange={(e) => handleInputChange('goodPartsProduced', e.target.value)}
                />
            </div>
        </div>
    );
};

// --- Edit Press Card ---
const EditPressCard = ({ press, onRename, onUpdateTargets }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-4 text-left"
            >
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
                    <SettingsIcon />
                    <span>Press Settings</span>
                </h3>
                <ChevronRightIcon className={`transform text-gray-500 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </button>

            {isOpen && (
                <div className="grid grid-cols-1 gap-x-4 gap-y-3 p-4 pt-0 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-600">Press Name</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                value={press.name}
                                onChange={(e) => onRename(e.target.value)}
                                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        e.currentTarget.blur();
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <FormInput
                        label="Target Availability (%)"
                        value={press.targets.availability}
                        onChange={(e) => onUpdateTargets({
                            ...press.targets,
                            availability: parseFloat(e.target.value) || 0
                        })}
                    />
                    <FormInput
                        label="Target Performance (%)"
                        value={press.targets.performance}
                        onChange={(e) => onUpdateTargets({
                            ...press.targets,
                            performance: parseFloat(e.target.value) || 0
                        })}
                    />
                    <FormInput
                        label="Target Quality (%)"
                        value={press.targets.quality}
                        onChange={(e) => onUpdateTargets({
                            ...press.targets,
                            quality: parseFloat(e.target.value) || 0
                        })}
                    />
                </div>
            )}
        </div>
    );
};

// --- Header Component ---
const AppHeader = ({ presses, selectedPressId, onSelectPress, onAddPress, currentView, onToggleView }) => {
    const [newPressName, setNewPressName] = useState('');

    const handleAddClick = () => {
        if (newPressName.trim() === '') return;
        onAddPress(newPressName.trim());
        setNewPressName('');
    };

    return (
        <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <LogoIcon />
                    <div>
                        <h1 className="text-lg font-bold text-gray-800">OEE Manufacturing System</h1>
                        <p className="text-sm text-gray-500">Overall Equipment Effectiveness Monitoring</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex rounded-md shadow-sm">
                        <input
                            type="text"
                            value={newPressName}
                            onChange={(e) => setNewPressName(e.target.value)}
                            placeholder="New Press Name"
                            className="form-input block w-full min-w-0 flex-1 rounded-none rounded-l-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500"
                            onKeyPress={(e) => e.key === 'Enter' && handleAddClick()}
                        />
                        <button
                            onClick={handleAddClick}
                            className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100"
                            title="Add New Press"
                        >
                            <PlusIcon />
                        </button>
                    </div>

                    <button
                        onClick={onToggleView}
                        className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        title={currentView === 'detail' ? 'Switch to Overview' : 'Switch to Detail View'}
                    >
                        {currentView === 'detail' ? <TableCellsIcon /> : <ChartPieIcon />}
                        <span>{currentView === 'detail' ? 'Overview' : 'Detail'}</span>
                    </button>

                    {currentView === 'detail' && (
                        <div className="relative">
                            <select
                                value={selectedPressId || ''}
                                onChange={(e) => onSelectPress(e.target.value)}
                                className="form-select block w-full appearance-none rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            >
                                {presses.map((press) => (
                                    <option key={press.id} value={press.id}>
                                        {press.name}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <ChevronDownIcon />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

// --- Detail View ---
const DetailView = ({ press, metrics, oeeStatus, onUpdateData, onRename, onUpdateTargets, onRemove }) => {
    return (
        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
                {press.name}
            </h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="flex flex-col gap-4 lg:col-span-1">
                    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                        <OeeGauge oee={metrics.oee} status={oeeStatus} />
                    </div>

                    <DataEntryForm
                        data={press.data}
                        onChange={onUpdateData}
                    />

                    <EditPressCard
                        press={press}
                        onRename={onRename}
                        onUpdateTargets={onUpdateTargets}
                    />

                    <div className="mt-2 flex justify-end">
                        <button
                            onClick={() => onRemove(press.id)}
                            className="flex items-center space-x-1.5 rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                        >
                            <XIcon />
                            <span>Delete {press.name}</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:col-span-2">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <MetricCard
                            title="Availability"
                            value={metrics.availability}
                            target={press.targets.availability}
                            icon={<ClockIcon />}
                        />
                        <MetricCard
                            title="Performance"
                            value={metrics.performance}
                            target={press.targets.performance}
                            icon={<ZapIcon />}
                        />
                        <MetricCard
                            title="Quality"
                            value={metrics.quality}
                            target={press.targets.quality}
                            icon={<CheckCircleIcon />}
                        />
                    </div>

                    <OeeBarChart metrics={metrics} targets={press.targets} />
                </div>
            </div>
        </main>
    );
};

// --- No Press View ---
const NoPressView = () => (
    <main className="flex h-[calc(100vh-150px)] items-center justify-center">
        <div className="text-center text-gray-500">
            <h2 className="text-2xl font-medium">No press selected.</h2>
            <p className="mt-2">Add a new press or select one to see its details.</p>
        </div>
    </main>
);

// --- Overview View ---
const OverviewView = ({ presses }) => {
    const plantData = React.useMemo(() => {
        const totals = presses.reduce((acc, press) => {
            acc.plannedProductionTime += press.data.plannedProductionTime;
            acc.actualRunTime += press.data.actualRunTime;
            acc.totalPartsProduced += press.data.totalPartsProduced;
            acc.goodPartsProduced += press.data.goodPartsProduced;
            acc.idealRunTime += (press.data.totalPartsProduced * press.data.idealCycleTime);

            acc.targetAvailability += press.targets.availability;
            acc.targetPerformance += press.targets.performance;
            acc.targetQuality += press.targets.quality;

            return acc;
        }, {
            plannedProductionTime: 0,
            actualRunTime: 0,
            totalPartsProduced: 0,
            goodPartsProduced: 0,
            idealRunTime: 0,
            targetAvailability: 0,
            targetPerformance: 0,
            targetQuality: 0
        });

        const avgTargets = {
            availability: (presses.length > 0) ? totals.targetAvailability / presses.length : 90,
            performance: (presses.length > 0) ? totals.targetPerformance / presses.length : 95,
            quality: (presses.length > 0) ? totals.targetQuality / presses.length : 99
        };

        const availability = (totals.plannedProductionTime > 0)
            ? (totals.actualRunTime / totals.plannedProductionTime)
            : 0;

        let performance = (totals.actualRunTime > 0)
            ? (totals.idealRunTime / totals.actualRunTime)
            : 0;

        const quality = (totals.totalPartsProduced > 0)
            ? (totals.goodPartsProduced / totals.totalPartsProduced)
            : 0;

        const oee = availability * performance * quality;

        return {
            availability: availability * 100,
            performance: performance * 100,
            quality: quality * 100,
            oee: oee * 100,
            targets: avgTargets
        };

    }, [presses]);

    const plantOeeStatus = getOeeStatus(plantData.oee);

    const pressMetrics = React.useMemo(() => {
        return presses.map(press => {
            const metrics = calculateOEE(press.data);
            return {
                ...press,
                metrics
            };
        });
    }, [presses]);

    return (
        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
                Overall Plant Performance
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:col-span-2 lg:col-span-1">
                    <div className="flex h-full flex-col items-center justify-center">
                        <h2 className="text-xl font-semibold text-gray-700">Total Plant OEE</h2>
                        <div className="relative my-4 h-36 w-36">
                            <svg className="h-full w-full" viewBox="0 0 36 36">
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" className="text-gray-200" fill="none" stroke="currentColor" strokeWidth="3" />
                            </svg>
                            <svg className={`absolute left-0 top-0 h-full w-full -rotate-90 ${getOeeColor(plantData.oee)}`} viewBox="0 0 36 36">
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray={`${plantData.oee} ${100 - plantData.oee}`} strokeDashoffset="0" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className={`text-4xl font-bold ${getOeeColor(plantData.oee)}`}>
                                    {plantData.oee.toFixed(1)}<span className="text-2xl">%</span>
                                </span>
                            </div>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${getOeeColor(plantData.oee)} ${getOeeBgColor(plantData.oee)} bg-opacity-10`}>
                            {plantOeeStatus}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-4 sm:col-span-2 lg:col-span-3 lg:justify-start">
                    <MetricCard
                        title="Total Plant Availability"
                        value={plantData.availability}
                        target={plantData.targets.availability}
                        icon={<ClockIcon />}
                    />
                    <MetricCard
                        title="Total Plant Performance"
                        value={plantData.performance}
                        target={plantData.targets.performance}
                        icon={<ZapIcon />}
                    />
                    <MetricCard
                        title="Total Plant Quality"
                        value={plantData.quality}
                        target={plantData.targets.quality}
                        icon={<CheckCircleIcon />}
                    />
                </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Press Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">OEE</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Availability</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Performance</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Quality</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {pressMetrics.map((press) => {
                            const oeeColor = getOeeColor(press.metrics.oee);
                            const status = getOeeStatus(press.metrics.oee);
                            return (
                                <tr key={press.id}>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{press.name}</td>
                                    <td className={`whitespace-nowrap px-6 py-4 text-sm font-semibold ${oeeColor}`}>
                                        {press.metrics.oee.toFixed(1)}%
                                    </td>
                                    <td className={`whitespace-nowrap px-6 py-4 text-sm ${getMetricColor(press.metrics.availability, press.targets.availability)}`}>
                                        {press.metrics.availability.toFixed(1)}%
                                    </td>
                                    <td className={`whitespace-nowrap px-6 py-4 text-sm ${getMetricColor(press.metrics.performance, press.targets.performance)}`}>
                                        {press.metrics.performance.toFixed(1)}%
                                    </td>
                                    <td className={`whitespace-nowrap px-6 py-4 text-sm ${getMetricColor(press.metrics.quality, press.targets.quality)}`}>
                                        {press.metrics.quality.toFixed(1)}%
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getOeeBgColor(press.metrics.oee)} ${oeeColor} bg-opacity-10`}>
                                            {status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    );
};