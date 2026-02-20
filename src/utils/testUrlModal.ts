// Test utility to verify URL modal functionality
import { findProjectByModalId, getAllModalIds } from './projectUtils';

export const testUrlModalImplementation = () => {
  console.log('🧪 Testing URL Modal Implementation...');


  const allModalIds = getAllModalIds();
  console.log('✅ Modal IDs found:', allModalIds);

  const testResults = allModalIds.map(modalId => {
    const project = findProjectByModalId(modalId);
    return {
      modalId,
      found: !!project,
      title: project?.title || 'Not found',
      coverImg: project?.coverImg || 'Not found'
    };
  });

  console.log('✅ Project data lookup results:', testResults);

  const expectedModalIds = [
    'mathProblemGeneratorModal',
    'dostSetupSystemModal',
    'javaProjectModal',
    'figmaProjectModal',
    'photoProjectModal'
  ];

  const missingIds = expectedModalIds.filter(id => !allModalIds.includes(id));
  const extraIds = allModalIds.filter(id => !expectedModalIds.includes(id));

  if (missingIds.length === 0 && extraIds.length === 0) {
    console.log('✅ All expected modal IDs are present');
  } else {
    console.log('❌ Modal ID mismatch:', { missingIds, extraIds });
  }

  return {
    success: missingIds.length === 0 && extraIds.length === 0,
    totalModals: allModalIds.length,
    testResults
  };
};

// Test URLs that should work
export const testUrls = [
  'http://localhost:8000/?open_modal=mathProblemGeneratorModal',
  'http://localhost:8000/?open_modal=dostSetupSystemModal',
  'http://localhost:8000/?open_modal=javaProjectModal',
  'http://localhost:8000/?open_modal=figmaProjectModal',
  'http://localhost:8000/?open_modal=photoProjectModal',
  'http://localhost:8000/' // No modal
];
